import Marquee from "react-fast-marquee";
const Top = () => {
    const techBrands = [
        "Google",
        "Microsoft",
        "Apple",
        "Lenovo",
        "Samsung",
        "Amazon",
        "IBM",
        "Intel",
        "NVIDIA",
        "HP",
        "Dell",
        "Sony",
        "Cisco",
        "Oracle",
        "Adobe",
        "Facebook",
        "Twitter",
        "Tesla",
        "SpaceX",
        "Uber",
        "Netflix",
        "Airbnb"
    ];

    return (
        <div>
            <Marquee direction="right" behavior="scroll" scrollamount={4}>
                {techBrands.map((heading, index) => (
                    <p key={index} style={{ marginRight: "20px" }}>{heading}</p>
                ))}
            </Marquee>
        </div>
    );
};

export default Top;
