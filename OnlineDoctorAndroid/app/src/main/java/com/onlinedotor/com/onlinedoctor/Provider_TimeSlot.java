package com.onlinedotor.com.onlinedoctor;

public class Provider_TimeSlot {

    private String name;
    private String slot;

    public Provider_TimeSlot(){

    }

    public Provider_TimeSlot(String name, String slot){
        this.name = name;
        this.slot = slot;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getSlot(){
        return slot;
    }

    public void setSlot(String slot){
        this.slot = slot;
    }
}
