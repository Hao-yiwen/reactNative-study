package com.rndemo0734.components;

import android.content.Context;
import android.graphics.Color;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;

public class FragmentView extends FrameLayout {
    public FragmentView(@NonNull Context context) {
        super(context);
        this.setPadding(20, 20, 20, 20);
        this.setBackgroundColor(Color.parseColor("#FF0000"));

        TextView textView = new TextView(context);
        textView.setText("Hello from Android");
        this.addView(textView);
    }
}
