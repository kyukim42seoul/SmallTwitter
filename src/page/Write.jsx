import { FiArrowLeft } from "react-icons/fi"

export const Write = () => {
  return (
    <div>
      <header>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"1em", height:"54px", padding:"0 1.6em"}}>
          <FiArrowLeft/>
          <span>Write</span>
        </div>
      </header>
      <main>
        <textarea placeholder="What is happening?">

        </textarea>
      </main>

      <footer>

      </footer>
    </div>
  );
}