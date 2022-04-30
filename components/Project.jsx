import styles from '../styles/Project.module.css';

const Project = ({ project_name, project_img_src, project_desc, project_styles=styles }) => {
    return <div className={project_styles.container}>
        <h2 className={project_styles.title}>{project_name}</h2>
        <img className={project_styles.image} src={project_img_src}></img>
        <p className={project_styles.desc}>{project_desc}</p>        
    </div>;
};

export default Project;