type AsideProps = {
    children: React.ReactNode;
}


export function Aside({children} : AsideProps) {
    return (
        <aside className="aside" id="aside">
            {children}
        </aside>
    )
}