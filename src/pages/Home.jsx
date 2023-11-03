import React from "react";
import NoteList from "../components/NoteList";

const Home = () => {
    const notes = [
        {
            id: 1,
            title: "Catatan mentoring minggu 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum praesentium velit omnis? Aut eum architecto blanditiis pariatur magni ducimus!",
            createdAt: new Date(),
        },
        {
            id: 2,
            title: "Catatan mentoring minggu 5",
            desc: "Consectetur adipisicing elit. Temporibus laborum praesentium velit omnis? Aut eum architecto blanditiis pariatur magni ducimus!",
            createdAt: new Date(),
        },
        {
            id: 3,
            title: "Catatan mentoring minggu 5",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, autem! Consectetur adipisicing elit. Temporibus laborum praesentium velit omnis? Aut eum architecto blanditiis pariatur magni ducimus!",
            createdAt: new Date(),
        },
        {
            id: 4,
            title: "Resep Nasi Goreng Mantul",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, autem! Consectetur adipisicing elit. Temporibus laborum praesentium velit omnis? Aut eum architecto blanditiis pariatur magni ducimus!",
            createdAt: new Date(),
        },
    ];

    return (
        <div className="w-full min-h-screen p-5 bg-slate-800">
            <div className="max-w-5xl mx-auto">
                <div className="p-10">
                    <h1 className="text-3xl font-bold text-slate-200">
                        My Notes
                    </h1>
                    <hr className="border-none h-[2px] mt-3 bg-slate-200" />
                    <NoteList notes={notes} />
                </div>
            </div>
        </div>
    );
};

export default Home;
