package com.spilitcoderndemo;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.facebook.react.ReactInstanceManager;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        bootCommonRnBundle();
    }

    public void onSingleBundleClick(View v) {
//        Intent intent = new Intent(this, SingleBundleRnAppActivity.class);
//        System.out.println("onSingleBundleClick called, time: " + System.currentTimeMillis());
//        startActivity(intent);
    }

    public void onMultiBundleClick(View v) {
        Intent intent = new Intent(this, MultiBundleRnAppActivity.class);
        System.out.println("onMultiBundleClick called, time: " + System.currentTimeMillis());
        startActivity(intent);
    }

    private void bootCommonRnBundle() {
        ReactInstanceManager reactInstanceManager = SingletonReactInstanceManager.getReactInstanceManager(this);
        reactInstanceManager.createReactContextInBackground();
    }
}