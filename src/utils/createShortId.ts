import { nanoid } from 'nanoid'

export default function createShortId () {
    return nanoid(10)
}