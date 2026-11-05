import { MODES, useTheme } from '../../../context/ThemeContext';
import './skills.css';

/* ─── Skill data per mode ─── */
const SKILLS_DATA = {
    [MODES.SOFTWARE]: {
        mainTitle: 'Software Engineer',
        mainIcon: 'https://api.iconify.design/pajamas:monitor-o.svg',
        mainDesc: 'I like to code things from scratch and watch my ideas come to life in the browser. The process of transforming abstract concepts into interactive and functional applications is incredibly rewarding. I thrive on the challenge of solving complex problems and continuously learning new technologies.',
        mainTools: [
            { icon: 'https://api.iconify.design/logos:javascript.svg', label: 'JavaScript' },
            { icon: 'https://api.iconify.design/logos:react.svg', label: 'React' },
            { icon: 'https://api.iconify.design/logos:flutter.svg', label: 'Flutter' },
            { icon: 'https://api.iconify.design/devicon:cplusplus.svg', label: 'C++' },
            { icon: 'https://api.iconify.design/logos:python.svg', label: 'Python' },
            { icon: 'https://api.iconify.design/devicon:firebase.svg', label: 'Firebase' },
        ],
        secondTitle: 'Designer',
        secondIcon: 'https://api.iconify.design/icon-park-outline:edit.svg',
        secondDesc: 'I believe that the essence of great design lies in its ability to communicate ideas clearly and efficiently. Crafting visually appealing and intuitive user interfaces brings me immense fulfillment, as I strive to create experiences that are both aesthetically pleasing and highly functional.',
        secondTools: [
            { icon: 'https://api.iconify.design/devicon:figma.svg', label: 'Figma' },
            { icon: 'https://api.iconify.design/devicon:photoshop.svg', label: 'Photoshop' },
            { icon: 'https://api.iconify.design/wpf:create-new.svg', label: 'Paper' },
        ],
    },
    [MODES.DATASCIENCE]: {
        mainTitle: 'Data Scientist',
        mainIcon: 'https://api.iconify.design/carbon:machine-learning-model.svg',
        mainDesc: 'I work with data end-to-end: from ingestion and cleaning to building machine learning models and communicating insights. At GreenPowerMonitor (DNV) I applied data science to real-world energy monitoring challenges, building pipelines and predictive models that drive business decisions.',
        mainTools: [
            { icon: 'https://api.iconify.design/logos:python.svg', label: 'Python' },
            { icon: 'https://api.iconify.design/logos:pandas-icon.svg', label: 'Pandas' },
            { icon: 'https://api.iconify.design/logos:numpy.svg', label: 'NumPy' },
            { icon: 'https://api.iconify.design/simple-icons:scikitlearn.svg', label: 'Scikit-learn' },
            { icon: 'https://api.iconify.design/logos:tensorflow.svg', label: 'TensorFlow' },
            { icon: 'https://api.iconify.design/logos:jupyter.svg', label: 'Jupyter' },
        ],
        secondTitle: 'Data Engineer',
        secondIcon: 'https://api.iconify.design/carbon:data-base.svg',
        secondDesc: 'Building robust data pipelines and working with structured and unstructured data sources. I have experience querying and managing databases, orchestrating workflows and ensuring data quality throughout the pipeline.',
        secondTools: [
            { icon: 'https://api.iconify.design/logos:postgresql.svg', label: 'PostgreSQL' },
            { icon: 'https://api.iconify.design/logos:mysql.svg', label: 'MySQL' },
            { icon: 'https://api.iconify.design/logos:apache-spark.svg', label: 'Spark' },
        ],
    },
    [MODES.DEVOPS]: {
        mainTitle: 'DevOps Engineer',
        mainIcon: 'https://api.iconify.design/mdi:server-outline.svg',
        mainDesc: 'I am comfortable working in Linux environments, managing servers and automating repetitive tasks with shell scripts. I enjoy setting up reliable infrastructure and keeping systems running smoothly with proper monitoring and deployment pipelines.',
        mainTools: [
            { icon: 'https://api.iconify.design/logos:linux-tux.svg', label: 'Linux' },
            { icon: 'https://api.iconify.design/logos:docker-icon.svg', label: 'Docker' },
            { icon: 'https://api.iconify.design/logos:bash-icon.svg', label: 'Bash' },
            { icon: 'https://api.iconify.design/logos:git-icon.svg', label: 'Git' },
            { icon: 'https://api.iconify.design/logos:nginx.svg', label: 'Nginx' },
            { icon: 'https://api.iconify.design/logos:ssh.svg', label: 'SSH' },
        ],
        secondTitle: 'CI/CD & Cloud',
        secondIcon: 'https://api.iconify.design/carbon:cloud-services.svg',
        secondDesc: 'Experience setting up continuous integration and deployment pipelines, working with cloud platforms and ensuring reproducible builds. I value automation, reliability and clean infrastructure-as-code practices.',
        secondTools: [
            { icon: 'https://api.iconify.design/logos:github-actions.svg', label: 'GH Actions' },
            { icon: 'https://api.iconify.design/logos:gitlab.svg', label: 'GitLab CI' },
            { icon: 'https://api.iconify.design/logos:aws.svg', label: 'AWS' },
        ],
    },
};

const ToolGrid = ({ tools }) => (
    <div className="tools">
        {tools.map((t) => (
            <div className="tool" key={t.label}>
                <img src={t.icon} alt={t.label} />
                <p>{t.label}</p>
            </div>
        ))}
    </div>
);

const Skills = () => {
    const { mode } = useTheme();
    const data = SKILLS_DATA[mode];

    return (
        <div className="skills-container">
            {/* ── First block ── */}
            <div className='soft'>
                <div className='desc-soft'>
                    <div className='title-skill'>
                        <div className='tit'>
                            <img src={data.mainIcon} alt="" />
                            <h1>{data.mainTitle}</h1>
                        </div>
                        <p className='descrip-soft'>{data.mainDesc}</p>
                    </div>
                    <div className='soft-container-skills'>
                        <h2>Tooling</h2>
                        <ToolGrid tools={data.mainTools} />
                    </div>
                </div>
            </div>

            {/* ── Second block ── */}
            <div className='desc-soft'>
                <div className='title-skill'>
                    <div className='tit'>
                        <img src={data.secondIcon} alt="" />
                        <h1>{data.secondTitle}</h1>
                    </div>
                    <p className='descrip-soft'>{data.secondDesc}</p>
                </div>
                <div className='info-rigth'>
                    <div className='soft-container-skills'>
                        <h2>Tooling</h2>
                        <ToolGrid tools={data.secondTools} />
                    </div>
                    <div className='curriculum-text'>
                        <h2>You can find more information in my </h2>
                        <a href='https://drive.google.com/uc?export=download&id=1ERKbQhNHp7zjdOCSR62ko5fpXzOdzcF4'>Curriculum</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
