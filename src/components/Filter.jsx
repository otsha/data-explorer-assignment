import { Label, TextField, Input } from "@heroui/react"
import { useState } from "react"

const Filter = ({municipalities, handleSearch}) => {
    const [autofill, setAutofill] = useState('')

    const handleAutoFill = (ev) => {
        if (ev.target.value.length === 0) {
            return
        }

        console.log(ev.target.value)
        const closest = municipalities.filter((m) => m.toUpperCase().startsWith(ev.target.value.toUpperCase()))[0]
        console.log(closest)
        handleSearch(closest)
    }

    return (
        <TextField>
            <Label>Hae omaa kuntaasi</Label>
            <Input onChange={handleAutoFill} />
        </TextField>
    )
}

export default Filter