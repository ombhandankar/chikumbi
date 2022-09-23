const express = require('express');
const multer = require('multer');
const Table = require('../model/tables');

const router = express.Router();

router.get('', (req, res, next) => {
    let fetchedTable;
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const sortOn = req.query.sort;
    const orderOn = +req.query.order;
    const searchKey = req.query.search;
    const classes = +req.query.class;
    const sections = req.query.section;
    console.log(classes)

    const tableQuery = Table.find();
    if (pageSize && currentPage) {
        if (searchKey !== "") {

            if (sortOn !== "None") {
                if (sortOn === "marks") {
                    tableQuery
                        .find({
                            name: new RegExp('^' + searchKey, 'i'),
                            class: classes,
                            section: sections
                        })
                        .sort({ marks: orderOn })
                        .skip(pageSize * (currentPage - 1))
                        .limit(pageSize)
                } else if (sortOn === "age") {
                    tableQuery
                        .find({
                            name: new RegExp('^' + searchKey, 'i'),
                            class: classes,
                            section: sections
                        })
                        .sort({ age: orderOn })
                        .skip(pageSize * (currentPage - 1))
                        .limit(pageSize)
                }
            }
            else {
                tableQuery
                    .find({
                        name: new RegExp('^' + searchKey, 'i'),
                        class: classes,
                        section: sections
                    })
                    .skip(pageSize * (currentPage - 1))
                    .limit(pageSize)
            }
        }
        else {
            if (sortOn === "marks" || sortOn === "age") {
                if (sortOn === "marks") {
                    tableQuery
                        .find({
                            name: new RegExp('^' + searchKey, 'i'),
                            class: classes,
                            section: sections
                        })
                        .sort({ marks: orderOn })
                        .skip(pageSize * (currentPage - 1))
                        .limit(pageSize)
                } else if (sortOn === "age") {
                    tableQuery
                        .find({
                            name: new RegExp('^' + searchKey, 'i'),
                            class: classes,
                            section: sections
                        })
                        .sort({ age: orderOn })
                        .skip(pageSize * (currentPage - 1))
                        .limit(pageSize)
                }
            } else if (sortOn === "None") {
                console.log(classes);
                console.log(sections);
                tableQuery
                    .find({
                        class: classes,
                        section: sections
                    })
                    .skip(pageSize * (currentPage - 1))
                    .limit(pageSize)
            }
        }
    }
    tableQuery
        .then(docs => {
            console.log(docs);
            fetchedTable = docs;
            return Table.count();
        })
        .then(count => {
            res.status(200).json({
                message: 'Tables fetched successfully',
                table: fetchedTable,
                maxTable: count
            })
        })
        .catch()
})

router.delete("/:id", (req, res, next) => {
    console.log("okay")
    Table.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({
            message: "Deleted"
        });
    });
});

module.exports = router;