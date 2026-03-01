"use client";

import { useState } from "react";

const ROLES = [
    "Admin",
    "Manage",
    "Data Entry Operator",
    "Sales man",
    "Supervisor",
];

const USERS_MOCK = [
    { id: 1, name: "Ali Ahmed", email: "ali@example.com", role: "Manager" },
    { id: 2, name: "Sara Khan", email: "sara@example.com", role: "Data Entry Operator" },
    { id: 3, name: "Zubair Shah", email: "zubair@example.com", role: "Sales man" },
];

export default function RolesManagement() {
    const [currentUserRole, setCurrentUserRole] = useState("Owner");
    const [users, setUsers] = useState(USERS_MOCK);

    // Requirement Logic:
    // Owner: Assign Admin
    // Owner and Admin: Assign Admin, Manage, Data Entry Operator, Sales man
    // Manager: Assign Supervisor, Data Entry Operator, Sales man

    const getAvailableRolesForCurrentRole = (role: string) => {
        if (role === "Owner") {
            return ["Admin", "Manage", "Data Entry Operator", "Sales man"];
        }
        if (role === "Admin") {
            return ["Admin", "Manage", "Data Entry Operator", "Sales man"];
        }
        if (role === "Manager") {
            return ["Supervisor", "Data Entry Operator", "Sales man"];
        }
        return [];
    };

    const handleRoleChange = (userId: number, newRole: string) => {
        setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
        alert(`Role updated for user ${userId} to ${newRole}`);
    };

    return (
        <div className="roles-page glass-panel">
            <div className="page-header">
                <h1>Role Management</h1>
                <p className="text-muted">Manage your team's access levels.</p>
            </div>

            <div className="role-debug">
                <span>Logged in as: </span>
                <select value={currentUserRole} onChange={(e) => setCurrentUserRole(e.target.value)} className="role-select">
                    <option value="Owner">Owner</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Data Entry Operator">Data Entry Operator</option>
                </select>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Assign New Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><span className="role-badge">{user.role}</span></td>
                                <td>
                                    <select
                                        className="assign-select"
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        value=""
                                    >
                                        <option value="" disabled>Select Role</option>
                                        {getAvailableRolesForCurrentRole(currentUserRole).map(role => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style jsx>{`
        .roles-page {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .page-header { margin-bottom: var(--spacing-lg); }
        .role-debug {
          margin-bottom: var(--spacing-md);
          padding: var(--spacing-sm);
          border: 1px dashed var(--border-color);
          border-radius: var(--radius-md);
        }
        .role-select, .assign-select {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          padding: 0.5rem;
          border-radius: var(--radius-md);
          margin-left: 0.5rem;
        }
        .users-table-container { overflow-x: auto; }
        .users-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: var(--spacing-md);
        }
        .users-table th, .users-table td {
          text-align: left;
          padding: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }
        .role-badge {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 600;
        }
      `}</style>
        </div>
    );
}
