import 'bootstrap/dist/css/bootstrap.css';
import './Current_campsite.module.css'
function Current_campsite()
{
    return (
        <div className="currentCampSite">
        
            <div className="bg-danger">
                <ol className="d-flex gap-1" id="locContainer">
                    <li>
                        <div className="d-flex gap-1">
                            <a href="#">United States</a>
                            <div>{'>'}</div>
                        </div>
                    </li>
                    <li>
                        <a href="#">California</a>
                    </li>
                </ol>
            </div>
            <div>
                <h1 id="currentCampSite-Title">Camp with Critters</h1>
            </div>
            <div id='rating'>
                <ul className="d-flex gap-5">
                    <li>97%</li>
                    <li>190 reviews</li>
                    <li>Groveland, California</li>
                </ul>
            </div>
            <div id='buttonGroup '>
                <ul className="d-flex gap-5 ">
                    <li role="button" className='btn btn-danger ps-4 pe-4'>See available sites</li>
                    <li role="button" className='btn border-dark ps-4 pe-4'>Share</li>
                    <li role="button" className='btn border-dark ps-4 pe-4'>Save</li>
                </ul>
            </div>
        </div>
    )
}
export default Current_campsite;