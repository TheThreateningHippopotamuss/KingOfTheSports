import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created correct instance', () => {
        expect(component).toBeTruthy();
    });

    //   it('should render correct text', () => {
    //     let de = fixture.debugElement.query(By.css('h3'));
    //     let el: HTMLElement = de.nativeElement;

    //     expect(el.innerText).toContain('data');

    // });

});
