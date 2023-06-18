function Card(props: any) {
    const { variant, extra, children, ...rest } = props;
    return (
        <div
            className={` flex flex-col rounded-[20px] shadow-3xl shadow-shadow-500 bg-background-secondary ${extra}`}
            {...rest}
        >
            {children}
        </div>
    );
}

export default Card;