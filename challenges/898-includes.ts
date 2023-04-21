export type Includes<
    Arr extends unknown[],
    Item extends unknown
> = Item extends Arr[number] ? true : false

// Tests
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
