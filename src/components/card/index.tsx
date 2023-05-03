function Card(props: any) {
    const { variant, extra, children, ...rest } = props;
    return (
        <div
            className={`flex flex-col rounded-[20px] bg-background-secondary shadow-3xl shadow-shadow-500 ${extra}`}
            {...rest}
        >
            {children}
        </div>
    );
}

export default Card;