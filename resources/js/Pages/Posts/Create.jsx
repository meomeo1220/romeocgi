import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, Link } from '@inertiajs/inertia-react';
  

export default function Dashboard(props) {  

    const { data, setData, errors, post } = useForm({
        name: "",
        description: "",
		reason: "",
        targetdate: "",
		completeddate: ""
    });

  

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

  

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Posts" />

  

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">  

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("posts.index") }
                                >
                                    Back
                                </Link>
                            </div>

  

                            <form name="createForm" onSubmit={handleSubmit}>
							
                                <div className="flex flex-col">
								
                                    <div className="mb-4">
                                        <label className="">Name</label>

                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Name"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />

                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
									

                                    <div className="mb-0">
                                        <label className="">Description</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="description"
                                            name="description"
                                            errors={errors.description}
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                        />

                                        <span className="text-red-600">
                                            {errors.description}
                                        </span>
                                    </div>
									
									
									<div className="mb-4">
                                        <label className="">Reason</label>

                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Reason"
                                            name="reason"
                                            value={data.reason}
                                            onChange={(e) =>
                                                setData("reason", e.target.value)
                                            }
                                        />

                                        <span className="text-red-600">
                                            {errors.reason}
                                        </span>
                                    </div>
									
									<div className="mb-4">
                                        <label className="">Target Date</label>

                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Target Date"
                                            name="targetdate"
                                            value={data.targetdate}
                                            onChange={(e) =>
                                                setData("targetdate", e.target.value)
                                            }
                                        />

                                        <span className="text-red-600">
                                            {errors.targetdate}
                                        </span>
                                    </div>
									
									<div className="mb-4">
                                        <label className="">Completed Date</label>

                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Completed Date"
                                            name="completeddate"
                                            value={data.completeddate}
                                            onChange={(e) =>
                                                setData("completeddate", e.target.value)
                                            }
                                        />

                                        <span className="text-red-600">
                                            {errors.completeddate}
                                        </span>
                                    </div>								

                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
  

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}