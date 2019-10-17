'use strict'

const mongoose = require('mongoose')
let Helicopter = require('../models/helicopterModel');

exports.getHelicopters = async (req, res) => {
    try {
        let collection = await Helicopter.find({}).exec()
        res.send(collection)
    } catch (err) {
        res.status(400).send({message: err.toString()})
    }
};

exports.createHelicopter = async (req, res) => { 
    try {
        let heliData = req.body;
        let newHeli = await Helicopter.create(heliData)
        res.send(newHeli) 
    } catch (err) {
        res.status(400).send({message: err.toString()});
    }
};

exports.getHelicopter = async (req, res) => {
    try {
        let heli = await Helicopter.findOne({_id: req.params.helicopterId}).exec()
        res.send(heli)
    } catch (err) {
        if (err instanceof mongoose.Error.CastError)
            res.send({message: 'Data was not found'});
        res.status(400).send({message: err.toString()});
    }
}

exports.updateHelicopter = async (req, res) => {
    try {
        let updateHeli = req.body
        let heli = await Helicopter.updateOne({_id: req.params.helicopterId}, updateHeli).exec()
        res.send(heli)
    } catch (err) {
        if (err instanceof mongoose.Error.CastError)
            res.send({message: 'Data was not found'});
        res.status(400).send({message: err.toString()});
    }
}

exports.removeHelicopter = async (req, res) => {
    try {
        let heli = await Helicopter.deleteOne({_id: req.params.helicopterId}).exec()
        res.send(heli)
    } catch (err) {
        if (err instanceof mongoose.Error.CastError)
            res.send({message: 'Data was not found'});
        res.status(400).send({message: err.toString()});
    }
}