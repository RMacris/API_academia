import express from "express";
import { AvaliacaoDAO } from "../DAO/AvaliacaoDAO";
import moment from "moment";

const aval = new AvaliacaoDAO()

test("expected to properly format the number into valid sql DECIMAL(3,2)",() => { 
    expect(aval.format(-1)).toBe(0.00)
    expect(aval.format(0)).toBe(0.00)
    expect(aval.format(2.23)).toBe(2.23)
    expect(aval.format(0.04444)).toBe(0.04)
    expect(aval.format(-0.04444)).toBe(0.00)
    expect(aval.format(232141512)).toBe(999.99)
})

test('it should return 999.99 for numbers bigger than Number.MAX_SAFE_INTEGER', () => { 
    expect(aval.format(239018095172093890185123)).toBe(999.99)
})

test('it should not process string values and return 0.00',() => { 
    expect(aval.format("0")).toBe(0.00)
    expect(aval.format("32")).toBe(0.00)
    expect(aval.format("-32")).toBe(0.00)
    expect(aval.format("a")).toBe(0.00)
    expect(aval.format("*")).toBe(0.00)
    expect(aval.format("*")).toBe(0.00)
    expect(aval.format("{{")).toBe(0.00)
    expect(aval.format("")).toBe(0.00)
})

test('it should return the correct createdAt time', () => { 
    const avaliacao = new AvaliacaoDAO()
    expect(avaliacao.$createdAt).toBe(moment().format())
})

test("it should create an Avaliacao Object with that feed data", () => {
    const data = { 
        altura         : 183.32, 
        peso           : 80.32, 
        massaMuscular  : 24.0401230,
        taxaGordura    : 18.0556,
        ombrosE        : 19.9022,
        ombrosD        : 21.9022,
        tricipalE       : 9.3,
        tricipalD       : 10.3,
        peitoral       : 10.23,
        cintura        : 32.8546,
        quadril        : 50.654,
        bracoE         : 60.645,
        bracoD         : 70.6234,
        pernaE         : 67.023423623467234356,
        pernaD         : 84.345,
        panturrilhaE   : 63.4325,
        panturrilhaD   : 43.0,
        abdomem        : 23.0,
        gluteo         : 0.0,
        $user_id       : 0,
        $createdAt     : 0,
        $updatedAt     : 0 
    }
    const checker = { 
        $altura         : 183.32, 
        $peso           : 80.32 , 
        $massaMuscular  : 24.04 ,
        $taxaGordura    : 18.06 ,
        $ombrosE        : 19.9  ,
        $ombrosD        : 21.9  ,
        $tricipalE      : 9.3  ,
        $tricipalD      : 10.3  ,
        $peitoral       : 10.23 ,
        $cintura        : 32.85 ,
        $quadril        : 50.65 ,
        $bracoE         : 60.65 ,
        $bracoD         : 70.62 ,
        $pernaE         : 67.02 ,
        $pernaD         : 84.34 ,
        $panturrilhaE   : 63.43 ,
        $panturrilhaD   : 43.00 ,
        $abdomem        : 23.00 ,
        $gluteo         : 0.00,
        $user_id        : 0,
        $createdAt      : 0,
        $updatedAt      : 0 
    }
    
    let { user_id, createdAt, updatedAt, ...restData} = new AvaliacaoDAO(data)
    let { $user_id, $createdAt, $updatedAt, ...restChecker} = checker
    expect(restData).toMatchObject(restChecker)
})