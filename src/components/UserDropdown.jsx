import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export const DropdownMenu = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

    return (
        <div className="relative">
              <button onClick={() => setOpen(!open)} className="focus:outline-none">
                      {user?.photoUrl ? (
                                <img src={user.photoUrl} alt="User" className="w-8 h-8 rounded-full" />
                                        ) : (
                                                  <FaUserCircle className="w-8 h-8 text-gray-700" />
                                                          )}
                                                                </button>

                                                                      {open && (
                                                                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 p-4">
                                                                                        <p className="text-sm text-gray-600 mb-2">👤 {user?.role.toUpperCase()}</p>
                                                                                                  <button
                                                                                                              onClick={onLogout}
                                                                                                                          className="w-full text-left text-red-500 hover:bg-red-100 p-2 rounded"
                                                                                                                                    >
                                                                                                                                                🔓 Logout
                                                                                                                                                          </button>
                                                                                                                                                                  </div>
                                                                                                                                                                        )}
                                                                                                                                                                            </div>
                                                                                                                                                                              );
                                                                                                                                                                              };