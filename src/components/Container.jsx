
function Container (props) {
  return (
    <div className={`sm:container xl:max-w-[1300px] max-w-[320px] mx-auto ${props.className}`}>{props.children}</div>
  )
}

export default Container