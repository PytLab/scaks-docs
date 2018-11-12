Solve model in scaks-Hub
------------------------

scaks also has a web application named scaks-Hub to help researcher
build and solve micro-kinetic model more easily.

File system
~~~~~~~~~~~

scaks-Hub uses a file explorer as the main user interface

|image0|

Open an existing model in model panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now you can enter the ``example_job`` directory where model setup file
and energy data file have already existed.

|image1|

Then you can click the green button to open the job panel. scaks-Hub
will read all those files and fill the form in model panel
automatically.

|image2|

Run a job
~~~~~~~~~

After all inputs prepared, you can click the green Run button to call
scaks core to solve current model. Then the running panel will be opened
and all solving information will be continously updated and displayed in
the code block.

The job is running:

|image3|

The job is finished:

|image4|

Generate job report
~~~~~~~~~~~~~~~~~~~

As the log information is not very friendly for users, scaks-Hub
provides a report for each completed job. You can click the green
Generate report buttong, then a report panel will be opened. All related
results such as ODE integration trajectory, steady state coverages,
reversibilities and turnover frequencies.

|image5|

|image6|

.. |image0| image:: ../_static/file_system.png
.. |image1| image:: ../_static/example_job.png
.. |image2| image:: ../_static/model_panel.png
.. |image3| image:: ../_static/job_running.png
.. |image4| image:: ../_static/job_finished.png
.. |image5| image:: ../_static/report_panel.png
.. |image6| image:: ../_static/report_panel_2.png

