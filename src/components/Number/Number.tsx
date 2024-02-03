interface INumberProps {
    num: number;
    className: string;
}

function Number({num, className}: INumberProps): JSX.Element {
    return (
        <div className={className}>
            {num}
        </div>
    );
}

export default Number;