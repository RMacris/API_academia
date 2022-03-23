import express from "express";
import {AvaliacaoModel} from "./AvaliacaoModel.js";


const aval = new AvaliacaoModel()

test("expected to properly format the number into valid sql DECIMAL(3,2)",() => { 
    expect(aval.format(-1)).toBe(0.00)
    expect(aval.format(0)).toBe(0.00)
    expect(aval.format(2.23)).toBe(2.23)
    expect(aval.format(0.04444)).toBe(0.04)
    expect(aval.format(-0.04444)).toBe(0.00)
    expect(aval.format(232141512)).toBe(232141512.00)
})

test('it should return 0.00 for numbers bigger than Number.MAX_SAFE_INTEGER', () => { 
    expect(aval.format(239018095172093890185123)).toBe(0.00)
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

test("it should create an Avaliacao Object with that feed data", () => {
    const data = { 
        altura         : 183.32, 
        peso           : 80.32, 
        massaMuscular  : 24.0401230,
        taxaGordura    : 18.0556,
        tricipal       : 9.3,
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
        gluteo         : 0.0
    }
    const checker = { 
        $altura         : 183.32, 
        $peso           : 80.32 , 
        $massaMuscular  : 24.04 ,
        $taxaGordura    : 18.06 ,
        $tricipal       : 9.30  ,
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
        $gluteo         : 0.00
    }
  
    expect(new AvaliacaoModel(data)).toMatchObject(checker)
})