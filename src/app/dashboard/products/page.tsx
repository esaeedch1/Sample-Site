"use client";

import { useState, useRef, useEffect } from "react";
import { PRODUCTS, Product } from "@/lib/data";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    type: "simple",
    sku: "",
    published: true,
    isFeatured: false,
    visibility: 'visible',
    description: "",
    regularPrice: 0,
    inStock: true,
    stock: 0,
    lowStockAmount: 0,
    weight: 0,
    volume: 0,
    allowReviews: true,
    purchaseNote: "",
    categories: [],
    images: [],
    brand: "CutiXa Adore"
  });

  const [columns, setColumns] = useState([
    { id: "id", label: "ID", visible: true },
    { id: "type", label: "Type", visible: true },
    { id: "sku", label: "SKU", visible: true },
    { id: "name", label: "Name", visible: true },
    { id: "published", label: "Published", visible: true },
    { id: "isFeatured", label: "Is featured?", visible: true },
    { id: "visibility", label: "Visibility", visible: true },
    { id: "description", label: "Description", visible: false },
    { id: "saleDateStart", label: "Sale Start", visible: false },
    { id: "saleDateEnd", label: "Sale End", visible: false },
    { id: "salePrice", label: "Sale Price", visible: true },
    { id: "inStock", label: "In Stock?", visible: true },
    { id: "stock", label: "Stock", visible: true },
    { id: "lowStockAmount", label: "Low Stock", visible: false },
    { id: "weight", label: "Weight (g)", visible: true },
    { id: "volume", label: "Volume (ml)", visible: true },
    { id: "allowReviews", label: "Allow Reviews?", visible: false },
    { id: "purchaseNote", label: "Purchase Note", visible: false },
    { id: "regularPrice", label: "Regular Price", visible: true },
    { id: "categories", label: "Categories", visible: true },
    { id: "brand", label: "Brand", visible: true },
  ]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(products.map(p => p.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleOpenEdit = (product: Product) => {
    setNewProduct(product);
    setEditingId(product.id);
    setIsEditing(true);
    setShowAddModal(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      setProducts(products.map(p => p.id === editingId ? { ...newProduct, id: editingId } as Product : p));
      alert("Product updated!");
    } else {
      const id = `new-${Date.now()}`;
      setProducts([...products, { ...newProduct, id } as Product]);
      alert("Product added!");
    }
    closeModal();
  };

  const closeModal = () => {
    setShowAddModal(false);
    setIsEditing(false);
    setEditingId(null);
    setNewProduct({
      name: "", type: "simple", sku: "", published: true, isFeatured: false,
      visibility: 'visible', description: "", regularPrice: 0,
      inStock: true, stock: 0, lowStockAmount: 0, weight: 0, volume: 0,
      allowReviews: true, purchaseNote: "", categories: [], images: [],
      brand: "CutiXa Adore"
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleSaveAllInventory = () => {
    localStorage.setItem('cutixa_inventory', JSON.stringify(products));
    alert("Full inventory saved! Any changes to 'Live/Published' status are now active.");
  };

  useEffect(() => {
    const saved = localStorage.getItem('cutixa_inventory');
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  return (
    <div className="product-management-page glass-panel">
      <div className="page-header">
        <div>
          <h1>Inventory & Stock Authority</h1>
          <p className="text-muted">{products.length} Products | {selectedIds.length} Selected | Role: Manager/Owner</p>
        </div>
        <div className="header-actions">
          <button onClick={handleSaveAllInventory} className="btn-primary save-btn">Save All Changes</button>
          <button onClick={() => setShowAddModal(true)} className="btn-secondary">Manual Entry</button>
          <button onClick={() => setShowSettingsModal(true)} className="btn-secondary">Columns</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="products-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedIds.length === products.length && products.length > 0}
                />
              </th>
              {columns.filter(c => c.visible).map(col => (
                <th key={col.id}>{col.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className={selectedIds.includes(p.id) ? 'selected-row' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(p.id)}
                    onChange={() => handleSelectRow(p.id)}
                  />
                </td>
                {columns.filter(c => c.visible).map(col => (
                  <td key={col.id}>
                    {col.id === 'published' || col.id === 'isFeatured' || col.id === 'inStock' || col.id === 'allowReviews' ? (
                      (p as any)[col.id] ? '✅' : '❌'
                    ) : col.id === 'categories' ? (
                      p.categories.join(', ')
                    ) : (p as any)[col.id]}
                  </td>
                ))}
                <td>
                  <button onClick={() => handleOpenEdit(p)} className="icon-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel scrollable-modal">
            <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={handleSaveProduct} className="multi-col-form">
              <div className="form-grid">
                <div className="input-group">
                  <label>SKU</label>
                  <input value={newProduct.sku} onChange={e => setNewProduct({ ...newProduct, sku: e.target.value })} />
                </div>
                <div className="input-group">
                  <label>Name</label>
                  <input value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required />
                </div>
                <div className="input-group">
                  <label>Regular Price</label>
                  <input type="number" value={newProduct.regularPrice} onChange={e => setNewProduct({ ...newProduct, regularPrice: parseFloat(e.target.value) })} required />
                </div>
                <div className="input-group">
                  <label>Sale Price</label>
                  <input type="number" value={newProduct.salePrice} onChange={e => setNewProduct({ ...newProduct, salePrice: parseFloat(e.target.value) })} />
                </div>
                <div className="input-group">
                  <label>Stock Quantity</label>
                  <input type="number" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })} />
                </div>
                <div className="input-group">
                  <label>Weight (g)</label>
                  <input type="number" value={newProduct.weight} onChange={e => setNewProduct({ ...newProduct, weight: parseFloat(e.target.value) })} />
                </div>
                <div className="input-group">
                  <label>Volume (ml)</label>
                  <input type="number" value={newProduct.volume} onChange={e => setNewProduct({ ...newProduct, volume: parseFloat(e.target.value) })} />
                </div>
                <div className="input-group">
                  <label>Brand</label>
                  <input value={newProduct.brand} onChange={e => setNewProduct({ ...newProduct, brand: e.target.value })} />
                </div>
              </div>

              <div className="form-toggles">
                <label className="check-label"><input type="checkbox" checked={newProduct.published} onChange={e => setNewProduct({ ...newProduct, published: e.target.checked })} /> Published</label>
                <label className="check-label"><input type="checkbox" checked={newProduct.isFeatured} onChange={e => setNewProduct({ ...newProduct, isFeatured: e.target.checked })} /> Featured</label>
                <label className="check-label"><input type="checkbox" checked={newProduct.inStock} onChange={e => setNewProduct({ ...newProduct, inStock: e.target.checked })} /> In Stock</label>
              </div>

              <div className="input-group mt-4">
                <label>Description</label>
                <textarea rows={4} value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
              </div>

              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSettingsModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <h2>Select Columns to Display</h2>
            <div className="column-grid">
              {columns.map(col => (
                <label key={col.id} className="col-toggle">
                  <input
                    type="checkbox"
                    checked={col.visible}
                    onChange={() => setColumns(columns.map(c => c.id === col.id ? { ...c, visible: !c.visible } : c))}
                  />
                  {col.label}
                </label>
              ))}
            </div>
            <button onClick={() => setShowSettingsModal(false)} className="btn-primary mt-6 w-full">Apply</button>
          </div>
        </div>
      )}

      <style jsx>{`
                .product-management-page { padding: 2rem; }
                .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .header-actions { display: flex; gap: 1rem; }
                
                .table-wrapper { 
                    overflow-x: auto; 
                    background: rgba(255, 255, 255, 0.02); 
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-color);
                }
                .products-table { width: 100%; border-collapse: collapse; min-width: 1200px; }
                .products-table th, .products-table td { 
                    padding: 1rem; 
                    text-align: left; 
                    border-bottom: 1px solid var(--border-color);
                    white-space: nowrap;
                    font-size: 0.875rem;
                }
                .selected-row { background: rgba(212, 175, 55, 0.05); }

                .modal-overlay { 
                    position: fixed; inset: 0; background: rgba(0,0,0,0.8); 
                    display: flex; align-items: center; justify-content: center; z-index: 1000; 
                }
                .scrollable-modal { max-height: 90vh; overflow-y: auto; max-width: 800px; width: 95%; padding: 2.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .form-toggles { display: flex; gap: 2rem; margin-top: 2rem; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: 0.5rem; }
                .check-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
                
                .input-group { display: flex; flex-direction: column; gap: 0.5rem; }
                .input-group label { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; }
                .input-group input, .input-group textarea {
                    background: var(--bg-tertiary); border: 1px solid var(--border-color);
                    color: white; padding: 0.75rem; border-radius: 0.5rem;
                }
                
                .column-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; margin-top: 1rem; }
                .col-toggle { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary); }
                
                .mt-4 { margin-top: 1rem; }
                .mt-6 { margin-top: 1.5rem; }
                .w-full { width: 100%; }
                .icon-btn { background: transparent; border: 1px solid var(--border-color); color: var(--accent-color); padding: 0.25rem 0.5rem; border-radius: 0.25rem; }
            `}</style>
    </div>
  );
}
