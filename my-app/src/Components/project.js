function Project(props) {
    return (
        <div className="projectBox">
            <h2 className="normalHeading normalHeadingProjectTitle">
                {props.projectName}
            </h2>

            <div className="projectContext">
                <li className="normalBodyProjects">
                    {props.description1}
                </li>

                <li className="normalBodyProjects">
                    {props.description2}
                </li>
            </div>

            <div className="tags">
                <div className="rowTags">
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags1}
                        </h4>
                    </div>
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags2}
                        </h4>
                    </div>
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags3}
                        </h4>
                    </div>
                </div>

                <div className="rowTags">
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags4} 
                        </h4>
                    </div>
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags5}
                        </h4>
                    </div>
                    <div className="projectTag">
                        <h4 className="normalBodyProjects normalBodyProjectsTags">
                            {props.tags6}
                        </h4>
                    </div>
                </div>
            </div>

            <div className="imgLine">

            </div>

            <div className="row12">
                <img src={props.img} className="projectImage"></img>
            </div>
        </div>
    )
}