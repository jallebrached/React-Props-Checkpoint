import React from 'react'

function Suggestion() {
  const movies =[
    {
    src:"https://www.youtube.com/embed/e6MxJbYyB5E",
    name:"“Sia - Unstoppable"
},
{
    src:"https://www.youtube.com/embed/EjWAdKWEVUE",
    name:"“Radiohead - Creep (Acoustic Cover)"

},
{
    src:"https://www.youtube.com/embed/UyaZmFGyuMg",
    name:"“Jonathan Roy - Keeping Me Alive"

},
{
    src:"https://www.youtube.com/embed/NxUkJpdgZLA",
    name:"“Sia - UnstoppStand By Me - Ben E. Kingable"
  }
]
  return (
    <div>
      {movies.map((el)=>(
        <>
             <iframe 
             width="150px"
             height="120px"
             left="0px"
             top="0px"
             src={el.src}
             title={el.name} 
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
               
             </iframe>
             <p>{el.name}</p>
             </>
      ))}
    </div>
  )
}

export default Suggestion
