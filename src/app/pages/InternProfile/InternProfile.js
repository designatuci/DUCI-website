import clsx from 'clsx';

import { useParams } from 'react-router-dom';
import cn from './InternProfile.module.scss';
import interns_2023 from 'assets/data/currentBoardInterns.json'
import { useEffect, useState, React} from 'react';


const InternProfile = () => {
    const {name} = useParams();
    console.log(name);
    const formattedName = name.split('-').join(' ');

    const [position, setPosition] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [industry, setIndustry] = useState('');
    const [fact, setFact] = useState('');
    const [why, setWhy] = useState('');
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        const intern = interns_2023.find(intern => intern.name.toLowerCase().replace(/\s/g, '-') === name);
        if (intern) {
            setPosition(intern.position);
            setYear(intern.year);
            setMajor(intern.major);
            setIndustry(intern.industry);
            setFact(intern.fact);
            setWhy(intern.why);
            import(`assets/images/board/current/${intern.photo}`).then((photoModule) => {
                setPhoto(photoModule.default);
            });
        }
    }, [name]);

    return (
        <div className={cn.box}>
            <div className={cn.container}>
                <div className={cn.box}> 
                    {photo && <img src={photo} alt="Intern Photo" />}
                </div>
                <div className={cn.box}>
                    <header className={cn.box}>
                        <h1>{formattedName}</h1>
                        <div style={{ color: '#089AFF' }}> {position} Intern </div>
                    </header>
                    <div className={cn.sect}>
                        <div>
                            <div>Year</div>
                            <div style={{ color: 'grey' }}> {year} </div>
                        </div>
                        <div>
                            <div>Major</div>
                            <div style={{ color: 'grey' }}> {major} </div>
                        </div>
                        <div>
                            <div>Industry of Interest</div>
                            <div style={{ color: 'grey' }}> {industry} </div>
                        </div>
                        <div>
                            <div>Fun Fact</div>
                            <div className={cn.fact} style={{ color: 'grey' }}> {fact} </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(cn.box, cn.desc)}>
                    <div style={{ color: 'red' }}> Why Design at UCI?</div>
                    <div className={cn.why}> {why} </div>
                </div>
            </div>


        </div>
    );
};

export default InternProfile;