import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    {/* <svg className="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> */}
                    <h1 className="text-body-emphasis">Jumbotron with icon</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
                    </p>
                    <div className="d-inline-flex gap-2 mb-5">
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Call to action
                            {/* <svg className="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg> */}
                        </button>
                        <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                            Secondary link
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link href="./" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link href="./services" className="nav-link px-2 text-body-secondary">Services</Link></li>
                        <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                        <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                        <li className="nav-item"><Link href="./about" className="nav-link px-2 text-body-secondary">About</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
                </footer>
            </div>
        </>
    );
}