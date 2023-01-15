import { Routes, Route } from 'react-router-dom';
import FileManager from './FileManager/FileManager';
import Project from './Project/Project';
import Welcome from './Welcome/Welcome';
import Header from '../Layouts/Header/Header';

export default function Home() {
    return (
        <>
            <div className='home'>

                <Header />

                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/file" element={<FileManager />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </div>
        </>
    )
}
