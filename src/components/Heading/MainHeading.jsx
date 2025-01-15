import './MainHeading.scss'
const MainHeading = ({title, text}) => {
    return (
        <div className="main-heading text-center py-4 px-4 lg:px-1.5">
            <h1 className="mb-3">{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default MainHeading