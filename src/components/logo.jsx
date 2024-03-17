export default function Logo({name,src})
{
  return(
    <div>
      <img src={src}></img>
      <h2>{name}</h2>
    </div>
  )
}