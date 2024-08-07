'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import UserForm from "@/components/Profile/UserForm";

const Profile: React.FC = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const [selectedUser, setSelectedUser] = useState<number | null>(null);

    return (
        <div className="card py-3 w-1/2 bg-white mx-auto text-center shadow my-4">
            <h2 className="py-6 text-2xl font-semibold text-center">User Management</h2>
            <UserForm userId={selectedUser ?? undefined} />
            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4">User List</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr className="w-full bg-gray-100 border-b">
                            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Name</th>
                            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Email</th>
                            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => setSelectedUser(user.id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
