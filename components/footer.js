

export default function footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex flex-col justify-center text-center text-xs">
        <div>
          Organization by{" "}
         
            <a 
                href="https://www.uns.ac.rs/" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                University of Novi Sad 
            </a>
            {" "} and {" "}
            <a 
                href="http://goss.rs/" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                Serbian Go Federation
            </a> {" "} and {" "}
            <a 
                href="https://www.eurogofed.org/" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                European Go Federation
            </a>
        </div>

        <div className="mt-8">
            <p>
                Usefull links {" "}
            </p>
            <a 
                href="https://novisad.travel/en/" 
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
                >
                Tourist Organisation of Novi Sad
            </a>
        </div>
        
        
      </footer>
  )
}
