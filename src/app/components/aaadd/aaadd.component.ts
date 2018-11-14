
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../core/service/http/http.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aaadd',
    templateUrl: './aaadd.component.html',
    styleUrls: ['./aaadd.component.scss']
  })
  export class AaaddComponent implements OnInit 
  {
    public hide: boolean = true;
    public labelId = [];
    public labelName = [];
    body: any = {};
    data: any;
    show: any = 0;
    color: any = "#fafafa";
    listing = true;
    public i = 0;
    dataArray = [];
    dataArrayCheck = [];
    checked = false;
    status = "open";
    accessToken = localStorage.getItem('token');
    @Output() newEvent = new EventEmitter();
    labelArray: any[];
    constructor(private  httpService:HttpService, private snackBar: MatSnackBar,
        private router: Router) { }
    ngOnInit() {
        this.getAllLabels();
    }
    toggle() {
        this.show = 1;
    }
    /**
     * @description : Add Notes api Call starts
     */
    addNotes() {
        if (this.checked == false) {
            this.httpService.httpAddNote('notes/addNotes', {
                'title': document.getElementById('titleId').innerHTML,
                'description': document.getElementById('notesId').innerHTML,
                'labelIdList': JSON.stringify(this.labelId),
                'checklist': '',
                'isPined': 'false',
                'color': this.color
            }, this.accessToken).subscribe(response => {
                this.newEvent.emit({
                })
                this.labelName = [];
                this.hide = !this.hide;
                this.color = "#fafafa";
                this.show = 0
            }, error => {
                console.log("failed", error)
                this.color = "#fafafa";
                this.hide = !this.hide;
                this.labelName = [];
                this.show = 0
            })
        }
        /**
         * @description : Api call for Adding checklist 
         */
        else {
            for (var i = 0; i < this.dataArray.length; i++) {
                if (this.dataArray[i].isChecked == true) {
                    this.status = "close"
                }
                var apiObj = {
                    "itemName": this.dataArray[i].data,
                    "status": this.status
                }
                this.dataArrayCheck.push(apiObj)
                this.status = "open"
            }
            console.log(this.dataArrayCheck);
            this.httpService.httpAddNote('notes/addNotes', {
                'title': document.getElementById('titleId').innerHTML,
                'labelIdList': JSON.stringify(this.labelId),
                'checklist': JSON.stringify(this.dataArrayCheck),
                'isPined': 'false',
                'color': this.color
            }, this.accessToken).subscribe(response => {
                this.newEvent.emit({
                })
                this.dataArrayCheck = [];
                this.labelName = [];
                this.hide = !this.hide;
                this.color = "#fafafa";
                this.show = 0
            }, error => {
                this.dataArrayCheck = [];
                console.log("failed", error)
                this.color = "#fafafa";
                this.hide = !this.hide;
                this.labelName = [];
                this.show = 0
            })
        }
    }
    /**
     * @description changecolor event
     * @param event 
     */
    colorChanges(event) {
        this.color = event;
    }
    /**
     * @description keydown event
     * @param event 
     */
    onKeydown(event) {
        if (event.key === "Enter") {
            console.log(event);
        }
    }
    /**
     * @description Dislay label as chip in notecards
     * @param event 
     */
    instantLabel(event) {
        if (this.labelName.indexOf(event) < 0) {
            this.labelId.push(event.id);
            this.labelName.push(event);
        } else {
            this.labelId.splice(this.labelId.indexOf(event), 1)
            this.labelName.splice(this.labelName.indexOf(event), 1)
        }
    }
    /**
     * @description get all Labels inside the notecards
     */
    getAllLabels() {
        let newArray = [];
        this.httpService.httpGetNote('noteLabels/getNoteLabelList', this.accessToken)
            .subscribe(data => {
                for (var i = 0; i < data['data']['details'].length; i++) {
                    if (data['data']['details'][i].isDeleted == false) {
                        newArray.push(data['data']['details'][i])
                    }
                }
                this.labelArray = newArray;
            })
    }
    /**
     * @description Enter condition inside checklist
     */
    enter() {
        this.i++;
        if (this.data != null) {
            console.log(event, "Keydown");
            var obj = {
                "index": this.i,
                "data": this.data
            }
            this.dataArray.push(obj);
            this.data = null
        }
    }
    ondelete(deletedObj) {
        console.log("Ondelete function runnig");
        for (var i = 0; i < this.dataArray.length; i++) {
            if (deletedObj.index == this.dataArray[i].index) {
                this.dataArray.splice(i, 1);
                break;
            }
        }
        console.log(this.dataArray);
    }

    editing(event, edited) {
        if (event.code == "Enter") {
            console.log("enter pressed");
            for (var i = 0; i < this.dataArray.length; i++) {
                if (edited.index == this.dataArray[i].index) {
                    this.dataArray[i].data == edited.data
                }
            }
            console.log(this.dataArray);
        }
    }
}