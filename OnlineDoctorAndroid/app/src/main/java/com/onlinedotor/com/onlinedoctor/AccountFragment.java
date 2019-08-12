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
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;

public class AccountFragment extends Fragment {

    private ImageView account;
    private ImageView family_member;
    private ImageView call_history;
    private ImageView medication;
    private ImageView lab_report;
    private ImageView payment;
    private ImageView vaccination;
    private ImageView monitor;
    private ImageView referral;
    private Button log_out;
    private ProgressBar progressBar;

    private FirebaseAuth mAuth;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_account, container, false);

        account = view.findViewById(R.id.account_page_account);
        family_member = view.findViewById(R.id.account_page_family_member);
        call_history = view.findViewById(R.id.account_page_call_history);
        medication = view.findViewById(R.id.account_page_medication);
        lab_report = view.findViewById(R.id.account_page_lab_report);
        payment = view.findViewById(R.id.account_page_payment);
        vaccination = view.findViewById(R.id.account_page_vaccination);
        monitor = view.findViewById(R.id.account_page_monitor);
        referral = view.findViewById(R.id.account_page_referral);

        log_out = view.findViewById(R.id.logout_btn);
        progressBar = view.findViewById(R.id.progressBar);

        log_out.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                FirebaseAuth.getInstance().signOut();
                Toast.makeText(getActivity().getApplicationContext(), "Login successful!", Toast.LENGTH_LONG).show();
                Intent intent = new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        account.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), AccountActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        family_member.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), FamilyMemberActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        call_history.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), CallHistoryActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });


        medication.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), MedicationActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });


        lab_report.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), LabReportActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        payment.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), PaymentActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        vaccination.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), VaccinationActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        monitor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), MonitorActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        referral.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Intent intent = new Intent(getActivity(), ReferralActivity.class);
                startActivity(intent);
                progressBar.setVisibility(View.GONE);
            }
        });

        return view;
    }
}
