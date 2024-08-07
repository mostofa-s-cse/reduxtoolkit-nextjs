import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/redux/store';
import { addUser, updateUser, deleteUser, resetUserForm } from '@/lib/redux/features/users/usersSlice';

interface UserFormProps {
    userId?: number;
}

const UserForm: React.FC<UserFormProps> = ({ userId }) => {
    const dispatch: AppDispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (userId !== undefined) {
            const user = users.find(u => u.id === userId);
            if (user) {
                setName(user.name);
                setEmail(user.email);
                setAddress(user.address);
            }
        } else {
            // Clear form for adding new user
            setName('');
            setEmail('');
            setAddress('');
        }
    }, [userId, users]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userId !== undefined) {
            dispatch(updateUser({ id: userId, name, email, address }));
        } else {
            const newUserId = users.length ? users[users.length - 1].id + 1 : 1;
            dispatch(addUser({ id: newUserId, name, email, address }));
        }
        // Clear form after submission
        setName('');
        setEmail('');
        setAddress('');
    };

    const handleDelete = () => {
        if (userId !== undefined) {
            dispatch(deleteUser(userId));
        }
    };

    const handleReset = () => {
        if (userId !== undefined) {
            dispatch(resetUserForm(userId));
        }
        // Clear form after reset
        setName('');
        setEmail('');
        setAddress('');
    };

    const handleCancel = () => {
        // Clear form or redirect to another page
        setName('');
        setEmail('');
        setAddress('');
        // Handle redirection or other cancellation logic here
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="p-2 border rounded w-full"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="p-2 border rounded w-full"
                    required
                />
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="p-2 border rounded w-full"
                />
                <div className="flex gap-2">
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                        {userId ? 'Update User' : 'Add User'}
                    </button>
                    {userId && (
                        <>
                            <button type="button" onClick={handleDelete} className="p-2 bg-red-500 text-white rounded">
                                Delete User
                            </button>
                            <button type="button" onClick={handleReset} className="p-2 bg-gray-500 text-white rounded">
                                Reset Form
                            </button>
                            <button type="button" onClick={handleCancel} className="p-2 bg-gray-500 text-white rounded">
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UserForm;
