
export default function CoronaLayout({children}) {
  return (
    <>
      <div className="container">
        <header>
          <h1>Thong tin virus corona</h1>
        </header>
          {children}
        <footer>
          <p>Copyright © 2020 - ReactJS1911E</p>
        </footer>
      </div>
    </>
  )
}