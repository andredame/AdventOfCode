const {partOne,partTwo}=require('./resolution.js')
describe('tests for the first Part',()=>{
    it('should return the proper result',()=>{
        const result =partOne('bvwbjplbgvbhsrlpgdmjqwftvncz')
        expect(result).toBe(5)
    })
    it('should return the proper result',()=>{
        const result =partOne('nppdvjthqldpwncqszvftbrmjlhg')
        expect(result).toBe(6)
    })
    it('should return the proper result',()=>{
        const result =partOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')
        expect(result).toBe(10)
    })
    it('should return the proper result',()=>{
        const result =partOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')
        expect(result).toBe(11)
    })
    it('should return the proper result',()=>{
        const result =partOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb')
        expect(result).toBe(7)
    })

});

describe('tests for the second Part',()=>{
    it('should return the proper result',()=>{
        const result =partTwo('bvwbjplbgvbhsrlpgdmjqwftvncz')
        expect(result).toBe(23)
    })
    it('should return the proper result',()=>{
        const result =partTwo('nppdvjthqldpwncqszvftbrmjlhg')
        expect(result).toBe(23)
    })
    it('should return the proper result',()=>{
        const result =partTwo('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')
        expect(result).toBe(29)
    })
    it('should return the proper result',()=>{
        const result =partTwo('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')
        expect(result).toBe(26)
    })
    it('should return the proper result',()=>{
        const result =partTwo('mjqjpqmgbljsphdztnvjfqwrcgsmlb')
        expect(result).toBe(19)
    })

});

