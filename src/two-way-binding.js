import { useState } from "react"
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },{
        id: 2,
        name: 'JavaScript'
    }, {
        id: 3,
        name: 'ReactJS'
    }
]

export function RadioCheck(){
    const [checked, setChecked] = useState(1);

    const handleSubmit = () => {
        console.log({id: checked})
    }

    return (
        <div style={{padding: 40}}>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export function CheckboxCheck(){
    const [checked, setChecked] = useState([3])

    console.log(checked)

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if(isChecked) return checked.filter(item => item!== id)
            else return [...prev, id]
        })
    }

    return (
        <div style={{padding: 40}}>
            {courses.map(course => (
                <div key = {course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )
}