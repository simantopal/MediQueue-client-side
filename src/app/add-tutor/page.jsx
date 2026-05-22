'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';


const AddTutorPage = () => {
    const router = useRouter();
    const { data: session, isLoading } = authClient.useSession();

    useEffect(() => {
        if (!isLoading && !session?.user) {
            router.replace("/login");
        }
    }, [session, isLoading, router]);

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!session?.user) {
        return null;
    }

    const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);


    const tutor = {
        tutorName: formData.get("tutorName"),
        imageUrl: formData.get("imageUrl"),
        location: formData.get("location"),
        subject: formData.get("subject"),


        fee: Number(formData.get("fee")),
        slot: Number(formData.get("slot")),

        dayAndTime: formData.get("dayAndTime"),
        departureDate: formData.get("departureDate"),
        institution: formData.get("institution"),
        experience: formData.get("experience"),
        teachingMode: formData.get("teachingMode"),
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(tutor)
    });

    const data = await res.json();

    if (res.ok) {
        toast.success('Tutor added successfully!');
        e.target.reset();
    } else {
        toast.error('Failed to add tutor');
    }
};

    return (
        <div className='container mx-auto border m-8 shadow rounded-2xl max-w-5xl'>
            <h1 className='flex items-center justify-center font-bold text-3xl mt-5 text-indigo-500'>
                Add Tutor
            </h1>

            <form onSubmit={onSubmit} className="p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="md:col-span-2">
                        <TextField name="tutorName" isRequired>
                            <Label>Tutor Name</Label>
                            <Input placeholder="Jhon Doe" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="location" isRequired>
                        <Label>Location (Area/City)</Label>
                        <Input placeholder="Dhaka" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    <div>
                        <Select
                            name="subject"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label>Subject / Category</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Physics" textValue="Physics">
                                        Physics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Chemistry" textValue="Chemistry">
                                        Chemistry
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Biology" textValue="Biology">
                                        Biology
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Mathematics" textValue="Mathematics">
                                        Mathematics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Web-Development" textValue="Web-Development">
                                        Web-Development
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <TextField name="fee" type="number" isRequired>
                        <Label>Hourly fee</Label>
                        <Input type="number" placeholder="550" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    <TextField name="dayAndTime" isRequired>
                        <Label>Available Days and time</Label>
                        <Input
                            placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField name="slot" type="number" isRequired>
                            <Label>Total slot</Label>
                            <Input type="number" placeholder="50" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="departureDate" type="date" isRequired>
                            <Label>Session Start Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="institution" isRequired>
                            <Label>Institution</Label>
                            <Input placeholder="Dhaka university" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="experience" isRequired>
                            <Label>Experience</Label>
                            <TextArea
                                placeholder="Describe your teaching experience..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>
                <div>
                    <Select
                        name="teachingMode"
                        isRequired
                        className="w-full"
                        placeholder="Select Mode"
                    >
                        <Label>Teaching Mode</Label>
                        <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="online" textValue="Online">
                                    Online
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="offline" textValue="Offline">
                                    Offline
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="both" textValue="Both">
                                    Both
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>
                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-none w-full bg-cyan-500 text-white"
                >
                    Add Tutor
                </Button>
            </form>
        </div>
    );
};

export default AddTutorPage;