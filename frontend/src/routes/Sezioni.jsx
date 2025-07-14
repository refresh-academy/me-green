const Sezioni = () => {
  return (
  <>
  <h1>Su che cosa vuoi fare il questionario?</h1>
  <div className=" flex-col  ">
  <div className="flex">
    <input type="checkbox"  value="Casa" />
        <h1>Casa</h1>
  </div>
<div className="flex">
    <input type="checkbox"  value="Trasporti" />
        <h1>Trasporti</h1>
  </div>
  <div className="flex">
    <input type="checkbox"  value="Viaggi" />
        <h1>Viaggi</h1>
  </div>
  <div className="flex">
    <input type="checkbox"  value="Alimentazione" />
        <h1>Alimentazione</h1>
  </div>
  <div className="flex">
    <input type="checkbox"  value="Consumi/Rifiuti" />
        <h1>Consumi/Rifiuti</h1>
  </div>
</div>
  </>)
}
export default Sezioni