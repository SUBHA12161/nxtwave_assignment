import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddResource = ({ lastActiveTab, goBackToPreviousTab }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json', data);
            if (response.status === 200) {
                toast.success('Item created successfully!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error('Failed to create item.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error('Failed to create item.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    const handleGoBack = () => {
        goBackToPreviousTab();
    };

    return (
        <div className="container">
            <div>
                <button className="btn btn-light" onClick={handleGoBack}> Back{lastActiveTab && lastActiveTab.name}</button>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="form-container">
                        <h2>Item Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Item Title</label>
                                <input
                                    {...register('itemTitle', { required: 'Item Title is required' })}
                                />
                                {errors.itemTitle && <p>{errors.itemTitle.message}</p>}
                            </div>

                            <div>
                                <label>Link</label>
                                <input
                                    {...register('link', {
                                        required: 'Link is required',
                                        pattern: {
                                            value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
                                            message: 'Invalid URL'
                                        }
                                    })}
                                />
                                {errors.link && <p>{errors.link.message}</p>}
                            </div>

                            <div>
                                <label>Icon URL</label>
                                <input
                                    {...register('iconUrl', {
                                        required: 'Icon URL is required',
                                        pattern: {
                                            value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
                                            message: 'Invalid URL'
                                        }
                                    })}
                                />
                                {errors.iconUrl && <p>{errors.iconUrl.message}</p>}
                            </div>

                            <div>
                                <label>Tag Name</label>
                                <select {...register('tagName', { required: 'Tag Name is required' })}>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                {errors.tagName && <p>{errors.tagName.message}</p>}
                            </div>

                            <div>
                                <label>Category</label>
                                <input
                                    {...register('category', { required: 'Category is required' })}
                                />
                                {errors.category && <p>{errors.category.message}</p>}
                            </div>

                            <div>
                                <label>Description</label>
                                <textarea
                                    {...register('description', { required: 'Description is required' })}
                                />
                                {errors.description && <p>{errors.description.message}</p>}
                            </div>

                            <button type="submit">Create</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="./Group.png" alt="Image" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default AddResource;