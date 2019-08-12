package com.onlinedotor.com.onlinedoctor;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ProgressBar;

public class AppointmentFragment extends Fragment {

    private Button addNewAppointmentBtn, previousAppointmentBtn, upcmoingAppointmentBtn;
    private ProgressBar progressBar;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_appointment, container, false);
        addNewAppointmentBtn = view.findViewById(R.id.addNewAppointment);
        progressBar = view.findViewById(R.id.progressBar);

        addNewAppointmentBtn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                addNewAppointment();
            }
        });

        previousAppointmentBtn = view.findViewById(R.id.previous_appointment_btn);
        previousAppointmentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                previous_appointment();
            }
        });

        upcmoingAppointmentBtn = view.findViewById(R.id.upcoming_appointment_btn);
        upcmoingAppointmentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                upcoming_appointment();
            }
        });
        return view;
    }

    public void addNewAppointment(){
        progressBar.setVisibility(View.VISIBLE);
        Intent intent = new Intent(getActivity(), ProviderListActivity.class);
        startActivity(intent);
    }

    public void previous_appointment() {

    }

    public void upcoming_appointment() {

    }
}
