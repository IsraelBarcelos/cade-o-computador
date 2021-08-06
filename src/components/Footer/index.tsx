type footerProps = {
  children: React.ReactNode;
}

export function Footer(props: footerProps) {
  return (
    <footer className="footer">
      {props.children}
    </footer>
  )
}