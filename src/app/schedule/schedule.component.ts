import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from '../models/schedule';
import {ScheduleTransfer} from '../models/schedule.transfer';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() schedules: Schedule[];
  @Input() schedulesTransfer: ScheduleTransfer[];
  ROLE_USER: boolean;

  constructor(private router: Router, private auth: AuthenticationService) {
    this.ROLE_USER = this.auth.getUserRole();
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.schedules = $event;
  }

  receiveMessageTransfer($event) {
    this.schedulesTransfer = $event;
  }

  getDelayBetweenTwoDates(dateDeparture, dateArrival) {
    const hourDiff = new Date(dateArrival).getTime() - new Date(dateDeparture).getTime();
    const minDiff = Math.ceil(hourDiff / 60 / 1000);
    const hDiff = hourDiff / 3600 / 1000;
    const humanReadable: any = {};
    humanReadable.hours = Math.floor(hDiff);
    humanReadable.minutes = minDiff - 60 * humanReadable.hours;
    if (humanReadable.minutes >= 0 && humanReadable.minutes < 10) {
      (humanReadable.minutes === 0) ? humanReadable.minutes = '00' : humanReadable.minutes = '0' + humanReadable.minutes;
    }
    return humanReadable.hours + ':' + humanReadable.minutes;
  }

  findTicket(id) {
    this.router.navigateByUrl('/ticket/direct/' + id);
  }

  findTicketTransfer(id_departure, id_arrival) {
    this.router.navigateByUrl('/ticket/transfer/' + id_departure + '/' + id_arrival);
  }
}
