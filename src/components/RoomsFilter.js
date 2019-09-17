import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    // console.log(context);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];

    // map to jsx
    // room type
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    // person capacity 
    let person = getUnique(rooms, 'capacity');
    person = person.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/*select room type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end select room type */}

                {/* number of guest*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {person}
                    </select>
                </div>
                {/* end of guests */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        name="price"
                        type="range"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />

                </div>
                {/* end of room price */}

                {/* room size */}
                <div className="form-group">
                    <label htmlFor="price">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of room size */}
                {/* extras */}
                {/* breakfast */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                {/* end of breakfast */}
                {/* pets allowed */}
                <div className="single-extra">
                <input
                    type="checkbox"
                    name="pets"
                    checked={pets}
                    onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of pets allowed */ }
            </form >
        </section >
    );
};

export default RoomsFilter
