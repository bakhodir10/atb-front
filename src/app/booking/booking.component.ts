import {Component, Inject, OnInit} from '@angular/core';
import {Booking} from './booking.model';
import {BookingService} from './booking.service';
import {Flight} from '../flight/flight.model';
import {Customer} from '../customer/customer.model';

@Component({
  moduleId: module.id,
  selector: 'app-booking',
  templateUrl: 'booking.component.html',
  styleUrls: ['booking.component.css']
})
export class BookingComponent implements OnInit{
  customer : Customer = new Customer();
  flight : Flight = new Flight();
  booking : Booking = new Booking();
  ngOnInit(): void {
  }

  constructor(@Inject('BookingService') private bookingService: BookingService) {
  }

  bookFlight(){
    this.flight = JSON.parse(localStorage.getItem('flight'));
    this.booking.customer = this.customer;
    this.booking.flight= this.flight;
    this.bookingService.create(this.booking).then(res =>{
      console.log(res);
    });
  }
}
