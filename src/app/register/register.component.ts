import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private data: DataService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fName: ['', Validators.required],
            lName: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', [Validators.required]],
            department: ['', [Validators.required]]
        });
    }

    get f() { return this.registerForm.controls; }



    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;

        this.data.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loading = false;
                    this.router.navigate(['/employee']);
                },
                error => {
                    this.loading = false;
                });
    }

}
