import walkingGif from '../assets/ladybug.gif';

export default function Header(){
    return (
    <div className="header">
        <div className="bug">
        <img src={walkingGif} alt="gif berjalan" />
        </div>
        <h1>Belanjaannya Mill </h1>;
        </div>
        );
}