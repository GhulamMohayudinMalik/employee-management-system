import React from "react";
import AcceptTask from "./AcceptTask";

function TaskList() {
    return (
        <div
            id="tasklist"
            className="h-[40%] flex flex-nowrap overflow-x-auto items-center justify-start gap-10 mt-10 w-full py-5"
        >
            {/* <div className="h-full shrink-0 w-[400px] bg-red-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
                </p>
            </div> */}
            <AcceptTask />
            <div className="h-full shrink-0 w-[400px] bg-green-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
                </p>
            </div>
            <div className="h-full shrink-0 w-[400px] bg-yellow-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
                </p>
            </div>
            <div className="h-full shrink-0 w-[400px] bg-blue-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
                </p>
            </div>
            <div className="h-full shrink-0 w-[400px] bg-orange-400 p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt ullam expedita sapiente quas itaque.
                </p>
            </div>
        </div>
    );
}

export default TaskList;
